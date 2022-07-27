<template>
  <q-page class="page-content q-py-md q-px-md q-px-md-lg q-px-lg-xl">
    <h4>{{ service?.title ?? 'Service' }}</h4>

    <div class="row">
      <div class="col-4 q-pa-sm" v-for="item in plugins" :key="item.id">
        <PluginCard
          :pluginId="item.id"
          :title="item.title"
          :details="item.details"
          :toggle="item.status"
          @toggle="toggleHandler"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import PluginCard from 'components/PluginCard.vue';
import { PluginInterface, ServiceInterface } from 'src/store/data/state';
import {
  clearPlugins,
  getPlugins,
  getServices,
  storePlugins,
  updatePlugin,
} from 'src/services/store-data';

@Component({
  components: { PluginCard },
})
export default class Service extends Vue {
  slug: string = this.$route.params.slug;

  get service(): ServiceInterface | undefined {
    return getServices(this.$store).find((item) => item.slug == this.slug);
  }

  get plugins(): PluginInterface[] {
    return getPlugins(this.$store);
  }

  updateData() {
    clearPlugins(this.$store);
    storePlugins(this.$store, this.slug);
  }

  toggleHandler(data: { id: string; status: string }) {
    const plugin = this.plugins.find((item) => item.id == data.id);

    if (plugin) {
      updatePlugin(this.$store, this.slug, {
        ...plugin,
        id: data.id,
        status: data.status,
      });
    }
  }

  @Watch('$route', { immediate: true, deep: true })
  onRouteChange(route: { params: { slug: string } }) {
    if (this.slug != route.params.slug) {
      this.slug = route.params.slug;
      this.updateData();
    }
  }

  created() {
    this.updateData();
  }
}
</script>
