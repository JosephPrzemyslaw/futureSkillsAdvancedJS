const mathOperations = {
    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (n >= 2) {
            return n * this.factorial(n - 1);
        }
    },
    pow(base, exponent) {
        if (exponent === 0) {
            return 1
        }
        if (exponent === 1) {
            return base;
        }
        return base * this.pow(base, exponent - 1);
    },
    fibonacci(n) {
        if(n === 1) {
            return 0;
        }
        if (n === 2) {
            return 1;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}

const mathOperationsProxy = {
    cache: new Map,
    getCacheValue(cacheKey) {
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        return null;
    },
    setCacheValue(cacheKey, funResult) {
        this.cache.set(cacheKey, funResult);
    },
    handleFunResult(cb, cacheInvocationKey) {
        const cacheValue = this.getCacheValue(cacheInvocationKey)
        if(cacheValue === null) {
            const funResult = cb();
            this.setCacheValue(cacheInvocationKey, funResult);

            return funResult;
        }
        console.log('Taking data from cache');
        return cacheValue;
    },
    getCacheInvocationKey(...args) {
        return `factorial:${args.join(",")}`;
    },
    factorial(n) {
        return this.handleFunResult(() =>mathOperations.factorial(n), this.getCacheInvocationKey(n));
    },
    pow(base, exponent) {
        return this.handleFunResult(() => mathOperations.pow(base,exponent), this.getCacheInvocationKey(base, exponent));
    },
    fibonacci(n) {
        return this.handleFunResult(() => mathOperations.fibonacci(n), this.getCacheInvocationKey(n));
    }
}


console.log(mathOperationsProxy.factorial(10)); // not cached
console.log(mathOperationsProxy.factorial(10)); // pulls out from cache
console.log(mathOperationsProxy.factorial(10)); // pulls out from cache

console.log(mathOperationsProxy.pow(10, 4)); // not cached
console.log(mathOperationsProxy.pow(10, 4)); // pulls out from cache
console.log(mathOperationsProxy.pow(10, 5)); // not cached