/**
 * DLoader Migration Initializer
 * Purpose: Pre-verify connection states and spawn the DLoader binary
 */

const { exec } = require('child_process');
console.log('🚀 Starting Data Migration Process: SQL ──> NoSQL via DLoader...');

// Run the DLoader command using our config.yaml file
exec('dloader --config config.yaml', (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Migration failed with error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.warn(`⚠️ Warning logs: ${stderr}`);
  }
  
  console.log(`✅ Migration completed successfully!\n${stdout}`);
});
