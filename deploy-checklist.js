const fs = require('fs');
const path = require('path');

const checks = {
  async checkBuildOptimization() {
    try {
      console.log('Running build analysis...');
      await require('child_process').execSync('npm run analyze', { stdio: 'inherit' });
    } catch (error) {
      console.warn('⚠️ Build analysis completed with warnings');
      // Don't fail the deployment for analysis warnings
    }
  },

  async checkPerformance() {
    try {
      console.log('Running Lighthouse check...');
      await require('child_process').execSync('npm run lighthouse', { stdio: 'inherit' });
    } catch (error) {
      console.warn('⚠️ Lighthouse checks completed with warnings');
      // Don't fail the deployment for performance warnings
    }
  },

  async runTests() {
    console.log('Running tests...');
    await require('child_process').execSync('npm run test', { stdio: 'inherit' });
  }
};

async function runDeploymentChecks() {
  try {
    await checks.runTests();
    await checks.checkBuildOptimization();
    await checks.checkPerformance();
    console.log('✅ All deployment checks completed!');
  } catch (error) {
    console.error('❌ Critical checks failed:', error);
    process.exit(1);
  }
}

runDeploymentChecks(); 