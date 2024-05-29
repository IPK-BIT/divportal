// Test case for exact match
console.log(isPathAllowed('/')); // Expected output: true

// Test case for exact match with a different path
console.log(isPathAllowed('/about')); // Expected output: true

// Test case for exact match with a different path
console.log(isPathAllowed('/contact')); // Expected output: true

// Test case for exact match with a different path
console.log(isPathAllowed('/carousel')); // Expected output: true

// Test case for exact match with a different path
console.log(isPathAllowed('/partners')); // Expected output: true

// Test case for path that matches the pattern '/collections/*'
console.log(isPathAllowed('/collections/123')); // Expected output: true

// Test case for path that does not match any of the allowed paths
console.log(isPathAllowed('/random')); // Expected output: false
