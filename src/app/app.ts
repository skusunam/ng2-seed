import {Component, bootstrap, NgFor} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
	selector: 'my-app',
	template: `
		<div>
			<h1>Angular2 - Superheroes</h1>
			<ul class="heroes">
				<li *ng-for='#superhero of superheroes' class="hero">
					<span class="badge">{{superhero.id}}</span> {{superhero.name}}
				</li>
			</ul>
		</div>	
	`,
	styles: [`
		.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}

		.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }

		.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}

		.heroes .badge {
			font-size: small;
			color: white;
			padding: 0.1em 0.7em;
			background-color: #369;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -1px;
		}
	`],
	viewProviders: [HTTP_PROVIDERS],
	directives: [NgFor]
})
class AppComponent {
	
	constructor(http: Http) {
		http.get('api/superheroes')
			.map(res => res.json())
			.subscribe(__superheroes => this.superheroes = __superheroes);
	}
}

bootstrap(AppComponent);