<template>
  <q-card flat bordered class="my-card border-card">
    <q-card-section class="row justify-between q-pb-xs">
      <div class="text-h6">{{ title }}</div>

      <div class="toggle-container text-center" :class="toggleStat">
        <q-toggle class="toggle-button" v-model="allowed" />
        <p class="toggle-text text-caption">{{ toggleStat }}</p>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none text-grey-6">
      {{ details }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Toggle } from 'components/types';

@Component
export default class PluginCard extends Vue {
  @Prop({ type: String, required: true }) readonly pluginId!: string;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String }) readonly details: string | undefined;
  @Prop({ type: String as PropType<Toggle>, default: 'blocked' })
  readonly toggle!: Toggle;

  toggleStat: Toggle = 'blocked';

  allowedData = false;
  get allowed() {
    return this.allowedData;
  }
  set allowed(value) {
    if (this.toggle != 'disabled') {
      this.allowedData = value;
      this.toggleStat = value ? 'allowed' : 'blocked';

      this.$emit('toggle', { id: this.pluginId, status: this.toggleStat });
    }
  }

  created() {
    const initialValue = this.toggle == 'allowed';
    this.toggleStat = this.toggle;

    if (this.toggle != 'disabled') {
      this.allowedData = initialValue;
      this.toggleStat = initialValue ? 'allowed' : 'blocked';
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  min-height: 346px;
}

.border-card {
  border-width: 4px;
}

.toggle-container {
  &.allowed .toggle-text {
    color: $blue-6;
  }

  &.blocked .toggle-text {
    color: $red-6;
  }

  &.disabled {
    color: $grey-6;

    .toggle-button {
      pointer-events: none;
    }
  }
}

@media (min-width: $breakpoint-sm-max) {
  .my-card {
    min-height: auto;
    height: 264px;
  }
}

@media (min-width: $breakpoint-md-max) {
  .my-card {
    height: 218px;
  }
}
</style>
