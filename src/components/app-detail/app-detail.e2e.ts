import { newE2EPage } from '@stencil/core/testing';

describe('app-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-detail></app-detail>');

    const element = await page.find('app-detail');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/detail/joseph' });

    const element = await page.find('app-detail ion-content p');
    expect(element.textContent).toContain('My name is Joseph.');
  });
});
