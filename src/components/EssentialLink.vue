<template>
  <q-item clickable :to="to" exact class="text-grey-10">
    <!-- <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section> -->

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: [String, Object], default: '#' }) readonly to!: string | object;
}
</script>
