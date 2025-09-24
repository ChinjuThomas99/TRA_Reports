var assert = require('assert');
const { percy } = require('browserstack-node-sdk');

describe('Text Verification', () => {
  it('should match displayed text with input text', async () => {
    var textButton = await $(`~Text Button`);
    await textButton.waitForDisplayed({ timeout: 30000 });
    await textButton.click();

    var textInput = await $(`~Text Input`);
    await textInput.waitForDisplayed({ timeout: 30000 });
    await textInput.click()
    await textInput.addValue("hello@browserstack.com"+"\n");

    var textOutput = await $(`~Text Output`);
    await textOutput.waitForDisplayed({ timeout: 30000 });
    await percy.screenshotApp("My Screenshot")
    var value = await textOutput.getText();

    if (value === "hello@browserstack.com")
      assert(true)
    else
      assert(false)
  });
});
