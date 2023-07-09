import List from '@/common/List.svelte';
import { expect } from '@playwright/test';
import { render, screen, within } from '@testing-library/svelte';

it('should render', async () => {
	render(List, {
		props: { content: 'some list', iconSrc: 'path/to/icon' }
	});
	const listItem = screen.getByRole('listitem');
	expect(listItem).toBeDefined();
	expect(within(listItem).getByText('some list')).toBeDefined();
	expect(within(listItem).getByRole('img')).toHaveProperty('src', expect.stringContaining('path/to/icon'));
});
