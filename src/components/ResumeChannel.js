export const ResumeChannel = {
  name: 'resume-channel',
  props: ['navCoords', 'title', 'channels'],
  computed: {
    selectedTitle() {
      return this.navCoords[0] === 1;
    },
  },
  methods: {
    isSelected(index, navCoords) {
      return navCoords[0] === 1 && navCoords[1] === index;
    },
  },
  template: `<section style="padding: 1rem;">
        <h3 class='item' :class="{selected: selectedTitle}">
                Reprendre
              </h3>
        <div style="display: flex; flex-wrap: wrap;">
            <button class='item channel' v-for="(channel, index) in channels" 
                style="marginLeft: 1rem;" 
                :class="{selected: isSelected(index, navCoords)}"
            >{{channel.label}}</button>
        </div>
</section>`,
};
