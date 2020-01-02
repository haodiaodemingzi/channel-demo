import { Component, Vue } from "vue-property-decorator";

export type Value = {
  text: string;
};

@Component
export class FoobarMixin extends Vue {
  mixinValue = 'Hello'

  add(a: number, b: number): number {
    this.log({ text: 'test' });
    return a + b;
  }

  log(value: Value): void {
    throw new Error("Method not implemented.");
  }
}