import { expect, test } from '@playwright/test';

test.describe('when user submit valid email address', () => {
	it('should render Success card', async ({ page }) => {
		await page.goto('/subscribe');
		// TODO input email
		// TODO click submit
		// TODO check success card is rendered
	});
});
