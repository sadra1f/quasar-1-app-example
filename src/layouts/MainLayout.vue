<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer behavior="desktop" show-if-above content-class="bg-grey-4">
      <q-list>
        <q-item-label header class="label text-grey-10 q-py-md-xl text-center">
          Data<strong>Guard</strong>
        </q-item-label>
        <DrawerLink
          v-for="link in links"
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
import DrawerLink from 'components/DrawerLink.vue';

const linksData = [
  {
    title: 'Marketing',
    to: { name: 'service', params: { slug: 'marketing' } },
  },
  {
    title: 'Finance',
    to: { name: 'service', params: { slug: 'finance' } },
  },
  {
    title: 'Personnel',
    to: { name: 'service', params: { slug: 'personnel' } },
  },
];

@Component({
  components: { DrawerLink },
})
export default class MainLayout extends Vue {
  links = linksData;
}
</script>
