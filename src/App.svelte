<script lang="ts" context="module">
export interface MyProps {
  name: string;
  other: string;
}
</script>

<script lang="ts">
  export let props: MyProps | undefined = undefined;
</script>

<p>{props?.name}</p>