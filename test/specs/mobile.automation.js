const { sleep } = require('webdriverio');
describe('Test Case Aplikasi Dietku', () => {
  it('should open apps', async () => {
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/header_welcome']").getText('Welcome...');
  });
  
  it('set text name', async () => {
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/til_name']").click();
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_name']").setValue('Dicki');
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_name']").getText('Dicki');
  });

  it('set text weight', async () => {
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/til_weight']").click();
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").setValue('83');
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_weight']").getText('83');
  });

  it('set text height', async () => {
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/til_height']").click();
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_height']").setValue('168');
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/et_height']").getText('168');
  })

  it('choose gender', async () => {
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/rb_male']").click();
    await $("//*[@resource-id='com.fghilmany.dietmealapp:id/rb_male']").getText('Male');
  })

//   it('open page informasi formulir', async () => {
//     await $("//*[@resource-id='com.fghilmany.dietmealapp:id/bt_next']").click();
//   })
});