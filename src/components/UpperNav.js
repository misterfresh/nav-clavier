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
      return navCoords[0] === 1 && navCoords[1] === index;
    },
  },
  template: `<nav style="display: flex; padding: 1rem;">
        <div style="color: #eee;">{{JSON.stringify(navCoords)}}</div>
        <h3 class='item' :class="{selected: selectedTitle}">
            {{title}}
          </h3>
        <h3 class='item navlink' v-for="(link, index) in upperLinks" 
            style="marginLeft: 1rem;" 
            :class="{selected: isSelected(index, navCoords)}"
        >{{link.label}}</h3>
</nav>`,
};
