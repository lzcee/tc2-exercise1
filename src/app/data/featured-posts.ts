import { PostCard } from '../models/PostCard';

export const featuredPosts: PostCard[] = [
	{
		title:
			'Take the 2021 scroll survey to help improve scrolling on the web',
		excerpt:
			'An introduction to the 2021 Scroll Survey from the Chrome team.',
		url: 'https://web.dev/2021-scroll-survey/',
	},
	{
		title:
			'How Zalando reduced performance feedback time from 1 day to 15 minutes with Lighthouse CI',
		excerpt:
			'The web team at Zalando found that integrating Lighthouse CI enabled a proactive approach to performance, with automated status checks able to compare the current commit to the main branch to prevent performance regressions.',
		url: 'https://web.dev/zalando/',
	},
	{
		title: 'Evolving the CLS metric',
		excerpt:
			'Plans for improving the CLS metric to be more fair to long-lived pages.',
		url: 'https://web.dev/evolving-cls/',
	},
];
