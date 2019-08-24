describe('Main page', () => {
  it('should have the right title', () => {
    expect(browser.getTitle()).toBe('Hello World!')
  })

  it('should display Hello World!', () => {
    expect($('h1').getText()).toBe('Hello World!')
  })
})
