export const ResumeChannel = {
  name: 'resume-channel',
  props: ['navCoords', 'title', 'channels'],
  computed: {
    selectedTitle() {
      return this.navCoords[0] === 0 && this.navCoords[1] === 1;
    },
  },
  methods: {
    isSelected(index, navCoords) {
      return navCoords[0] === 2 && navCoords[1] === index;
    },
  },
  template: `<section style="padding: 1rem;">
        <h3 class='item' :class="{selected: selectedTitle}">
                {{title}}
              </h3>
        <div style="display: flex; flex-wrap: wrap;">
            <button class='item channel' v-for="(channel, index) in channels" 
                style="marginLeft: 1rem;" 
                :class="{selected: isSelected(index, navCoords)}"
            >{{channel.label}}</button>
        </div>
</section>`,
};
