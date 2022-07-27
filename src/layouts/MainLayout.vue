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

import { getServices, storeServices } from 'src/services/store-data';

// eslint-disable-next-line
type linkType = { title: string; to: { [key: string]: any } };

@Component({
  components: { DrawerLink },
})
export default class MainLayout extends Vue {
  get links(): linkType[] {
    return getServices(this.$store).map((service) => {
      return {
        title: service.title,
        to: { name: 'service', params: { slug: service.slug } },
      };
    });
  }

  created() {
    storeServices(this.$store);
  }
}
</script>
