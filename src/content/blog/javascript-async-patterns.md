---
title: "深入理解 JavaScript 异步编程模式"
description: "全面解析 JavaScript 中的异步编程模式，包括回调函数、Promise、async/await 以及最佳实践，帮助你写出更优雅的异步代码。"
pubDatetime: 2024-11-28T14:30:00Z
author: "Your Name"
featured: true
draft: false
tags:
  - JavaScript
  - 异步编程
  - Promise
  - async/await
readingTime: "10 min read"
---

## 前言

异步编程是 JavaScript 的核心特性之一。理解异步编程模式对于编写高效、可维护的 JavaScript 代码至关重要。

## 异步编程的演进

### 1. 回调函数 (Callback)

最早的异步模式，简单但容易陷入"回调地狱"：

```javascript
// 回调地狱示例
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});
```

**优点：**
- 简单直观
- 浏览器原生支持

**缺点：**
- 代码嵌套层次深
- 错误处理困难
- 可读性差

### 2. Promise

Promise 提供了更优雅的异步处理方式：

```javascript
// Promise 链式调用
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .then(d => console.log(d))
  .catch(error => console.error(error));
```

**Promise 的三种状态：**

1. **Pending** - 初始状态
2. **Fulfilled** - 操作成功
3. **Rejected** - 操作失败

**创建 Promise：**

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("操作成功！");
    } else {
      reject("操作失败！");
    }
  }, 1000);
});
```

### 3. async/await

基于 Promise 的语法糖，让异步代码看起来像同步代码：

```javascript
async function fetchUserData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    return comments;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## 实战案例

### 并行执行多个异步操作

```javascript
// 方式 1: Promise.all - 全部成功才返回
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    return { users, posts, comments };
  } catch (error) {
    // 任何一个失败都会进入这里
    console.error(error);
  }
}

// 方式 2: Promise.allSettled - 等待全部完成
async function fetchAllDataSafely() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`请求 ${index} 成功:`, result.value);
    } else {
      console.error(`请求 ${index} 失败:`, result.reason);
    }
  });
}

// 方式 3: Promise.race - 返回最快完成的
async function fetchFastest() {
  const result = await Promise.race([
    fetchFromCDN1(),
    fetchFromCDN2(),
    fetchFromCDN3()
  ]);
  return result;
}
```

### 控制并发数量

```javascript
async function limitConcurrency(tasks, limit) {
  const results = [];
  const executing = [];

  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    results.push(p);

    if (limit <= tasks.length) {
      const e = p.then(() =>
        executing.splice(executing.indexOf(e), 1)
      );
      executing.push(e);

      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(results);
}

// 使用示例
const tasks = urls.map(url => () => fetch(url));
await limitConcurrency(tasks, 3); // 最多同时执行 3 个请求
```

### 重试机制

```javascript
async function retryAsync(fn, maxRetries = 3, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;

      console.log(`尝试 ${i + 1} 失败，${delay}ms 后重试...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // 指数退避
    }
  }
}

// 使用示例
const data = await retryAsync(() => fetch('/api/data'));
```

## 错误处理最佳实践

### 1. 统一错误处理

```javascript
async function safeAsync(fn) {
  try {
    const result = await fn();
    return [null, result];
  } catch (error) {
    return [error, null];
  }
}

// 使用
const [error, data] = await safeAsync(() => fetchData());
if (error) {
  console.error(error);
  return;
}
console.log(data);
```

### 2. 自定义错误类型

```javascript
class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

async function fetchWithError() {
  const response = await fetch('/api/data');
  if (!response.ok) {
    throw new NetworkError(
      'Network request failed',
      response.status
    );
  }
  return response.json();
}
```

## 性能优化技巧

### 1. 避免不必要的 await

```javascript
// ❌ 不好的做法
async function bad() {
  const result1 = await operation1();
  const result2 = await operation2(); // 等待 operation1 完成
  return [result1, result2];
}

// ✅ 好的做法
async function good() {
  const [result1, result2] = await Promise.all([
    operation1(),
    operation2() // 并行执行
  ]);
  return [result1, result2];
}
```

### 2. 使用缓存

```javascript
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const data = await fetch(url).then(r => r.json());
  cache.set(url, data);
  return data;
}
```

## 总结

异步编程的关键点：

1. ✅ 优先使用 async/await，代码更清晰
2. ✅ 合理使用 Promise.all 并行执行
3. ✅ 做好错误处理和边界情况
4. ✅ 注意性能优化，避免不必要的等待
5. ✅ 使用 TypeScript 增强类型安全

掌握这些模式，你就能写出优雅、高效的异步代码！

## 参考资料

- [MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript.info - Promises](https://javascript.info/promise-basics)
