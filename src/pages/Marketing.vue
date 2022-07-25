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

// import AxiosClient from 'src/services/axios-client';
import FetchClient from 'src/services/fetch-client';
import PluginCard from 'components/PluginCard.vue';
import { ClientInterface } from 'src/services/interfaces';

type dataType = {
  id: string;
  title: string;
  details: string;
  status: string;
};

// let client: ClientInterface = new AxiosClient();
let client: ClientInterface = new FetchClient();

@Component({
  components: { PluginCard },
})
export default class Marketing extends Vue {
  data: Array<dataType> = [];

  created() {
    client
      .get('api/services/marketing/plugins')
      .then((response) => {
        this.data = (response.data as { [key: string]: object })
          .plugins as Array<dataType>;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>
