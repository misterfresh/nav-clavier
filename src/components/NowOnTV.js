export const NowOnTv = {
  name: 'now-on-tv',
  props: ['navCoords', 'title', 'shows'],
  computed: {
    selectedTitle() {
      return this.navCoords[0] === 0 && this.navCoords[1] === 2;
    },
  },
  methods: {
    isSelected(index, navCoords) {
      return navCoords[0] === 3 && navCoords[1] === index;
    },
  },
  template: `<section style="padding: 1rem;">
        <h3 class='item' :class="{selected: selectedTitle}">
                {{title}}
              </h3>
        <div style="display: flex; flex-wrap: wrap;">
            <button class='item show' v-for="(show, index) in shows" 
                style="marginLeft: 1rem;" 
                :class="{selected: isSelected(index, navCoords)}"
            >{{show.label}}</button>
        </div>
</section>`,
};
