name: assign-me
on:
  pull_request:
    types: [opened, edited, synchronize]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
          
      - name: Install dependencies
        run: npm install fs @actions/core @actions/github
        
      - name: Assign PR
        env:
          USER_FILE: ${{ secrets.USER_FILE }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: node assign.js
