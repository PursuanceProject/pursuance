import { expect } from 'chai';

describe('Pursuance login', function() {
  it('should have a Log in link', function() {
    browser.url('http://localhost:8080/');
    expect(browser.getTitle()).to.equal('Pursuance');

    let loginLink = browser.$('=Log In');
    loginLink.click();
    expect(true === browser.isVisible('h4=Log In'));
  });

  it('should accept username input', function() {
    let username = browser.$('input#input-username-login');
    username.setValue('leapchat_test_user');
    expect('leapchat_test_user' === username.getValue());
  });
  
  it('should accept password input', function() {
    let password = browser.$('input#input-password-login');
    password.setValue('SooperSekritWord');
    expect('SooperSekritWord' === password.getValue());
  });

  it('should accept a valid username/password combination', function() {
    let submitBtn = browser.$('div#log-in-modal').$('button[type="submit"]');
    submitBtn.click();
    //FIXME: This validates we logged in, not that the combination was valid
    expect('@leapchat_test_user' === browser.$('span.Username').getText());
  });

  it('should have a logout button');

  it('should reject an unknown username');

  it('should reject an invalid password');

});
