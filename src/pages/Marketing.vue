<template>
  <q-page class="page-content q-py-md q-px-md q-px-md-lg q-px-lg-xl">
    <h4>Marketing</h4>

    <div class="row">
      <div class="col-4 q-pa-sm" v-for="item in data" :key="item.id">
        <PluginCard
          :title="item.title"
          :details="item.details"
          :toggle="item.status"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';

import PluginCard from 'components/PluginCard.vue';

type dataType = {
  id: string;
  title: string;
  details: string;
  status: string;
};

@Component({
  components: { PluginCard },
})
export default class Marketing extends Vue {
  data: Array<dataType> = [];

  created() {
    axios
      .get('api/marketing')
      .then((response) => {
        this.data = response.data as Array<dataType>;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>
