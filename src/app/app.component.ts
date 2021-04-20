import { featuredPosts } from './data/featured-posts';
import { PostCard } from './models/PostCard';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	featuredPosts: PostCard[] = featuredPosts;
}
