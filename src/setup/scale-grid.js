const { execSync } = require('child_process');

const workers = Number(process.argv[2] || 4);

console.log(`Creating ${workers} Playwright browser containers...`);

execSync(
  `curl -s -X POST http://127.0.0.1:4445/scale -H "Content-Type: application/json" -d "{\\"workers\\":${workers}}"`,
  { stdio: 'inherit' }
);