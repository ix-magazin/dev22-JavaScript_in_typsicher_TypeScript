//////////////////////////////////////////////////////////////
// Listing 1: Angulars einheitlicher Ansatz fuer TypeScript //
//////////////////////////////////////////////////////////////

import { Component, Input } from '@angular/core'

@Component({
  selector: 'hello-world',
  template: '<h1>Hello {{name}}!</h1>'
})
export class HelloComponent  {
  @Input() name: string
}


///////////////////////////////////////////////////
// Listing 2: TypeScript auch unter React nutzen //
///////////////////////////////////////////////////

interface Props {
	name: string
}

export function HelloWorld(props: Props) {
	return <h1>Hello {props.name}!</h1>
}

////////////////////////////////////////////////////////////////
// Listing 3: 'Hello World.vue' zeigt eine Vue.js-Komponenten //
////////////////////////////////////////////////////////////////

<script setup lang="ts">
	defineProps<{ name: string }>()
</script>

<template>
  <h1>Hello {{ name }}!</h1>
</template>

/////////////////////////////////////////////////////////////////
// Listing 4: Beispielhafter Einsatz von TypeScript und Svelte //
/////////////////////////////////////////////////////////////////

<script lang="ts">
	export let name: string
</script>

<h1>Hello {name}!</h1>

//////////////////////////////////////////////////////////
// Listing 5: Beispiel für den Einsatz eines Union-Type //
//////////////////////////////////////////////////////////

// vereinfacht
interface Tooltip {
	position: string
}

// oder besser
interface Tooltip {
	position: 'top' | 'right' | 'bottom' | 'left'
}

////////////////////////////////////////////
// Listing 6: Ein Beispiel in JavaScript //
///////////////////////////////////////////

function countItems(items) {
	if (!Array.isArray(items) && typeof items !== 'string') {
		throw Error("Parameter 'items' must be an 'Array' or 'string'")
	}

	return items.length
}

/////////////////////////////////////////////
// Listing 7: Überprüfung durch TypeScript //
/////////////////////////////////////////////

function countItems(items: Array<unknown> | string): number {
	return items.length
}



