<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer behavior="desktop" show-if-above content-class="bg-grey-4">
      <q-list>
        <q-item-label header class="label text-grey-10 q-py-md-xl text-center">
          Data<strong>Guard</strong>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="q-px-md-xl"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EssentialLink from 'components/EssentialLink.vue';

const linksData = [
  {
    title: 'Marketing',
    to: { name: 'home' },
  },
  {
    title: 'Finance',
    to: '#',
  },
  {
    title: 'Personnel',
    to: '#',
  },
];

@Component({
  components: { EssentialLink },
})
export default class MainLayout extends Vue {
  essentialLinks = linksData;
}
</script>
