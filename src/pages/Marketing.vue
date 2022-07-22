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

import PluginCard from 'components/PluginCard.vue';

let testData = [
  {
    id: '0',
    title: 'Plugin 1',
    details: 'A short text.',
    status: 'allowed',
  },
  {
    id: '1',
    title: 'Plugin 2',
    details: 'A short text.',
    status: 'blocked',
  },
  {
    id: '2',
    title: 'Plugin 3',
    details: 'A short text.',
    status: 'disabled',
  },
  {
    id: '3',
    title: 'Plugin 4',
    details: 'A short text.',
    status: 'disabled',
  },
  {
    id: '4',
    title: 'Plugin 5',
    details: 'A short text.',
    status: 'allowed',
  },
];

@Component({
  components: { PluginCard },
})
export default class Marketing extends Vue {
  // data: Array<object> = testData;
  data: typeof testData = testData;
}
</script>
