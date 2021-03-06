const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');


// next.js configuration
const nextConfig = {
	distDir: '../dist',
};
  
module.exports = withPlugins([
	[withTypescript(), {}],
], nextConfig);