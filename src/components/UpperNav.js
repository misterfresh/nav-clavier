export const UpperNav = {
  name: 'upper-nav',
  props: ['navCoords', 'title', 'upperLinks'],
  computed: {
    selectedTitle() {
      return this.navCoords[0] === 0 && this.navCoords[1] === 0;
    },
  },
  methods: {
    isSelected(index, navCoords) {
      return navCoords[0] === 0 && navCoords[1] === index;
    },
    refName(index) {
      return `navlink${index}`;
    },
  },
  template: `<nav style="display: flex; padding: 1rem;">
        <div style="color: #eee;">{{JSON.stringify(navCoords)}}</div>
        <button class='item navlink' v-for="(link, index) in upperLinks" 
            style="marginLeft: 1rem;" 
            :class="{selected: isSelected(index, navCoords)}"
            :ref="refName(index)"
        >{{link.label}}</button>
</nav>`,
  mounted() {
    this.$refs.navlink0[0].focus();
  },
};
