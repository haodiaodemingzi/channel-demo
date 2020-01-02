import { Component, Inject, Provide, Vue } from 'vue-property-decorator'

@Component
export class ExampleComponent  extends Vue {
  @Inject('bar') readonly bar!: string

  @Provide('bar') title= 'bar'
}