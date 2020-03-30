import { UpperNav } from './components/UpperNav.js';
import { ResumeChannel } from './components/ResumeChannel.js';
import { NowOnTv } from './components/NowOnTv.js';
import { LEFT, UP, DOWN, RIGHT, ENTER } from './data/constants.js';
import { navTree } from './data/navTree.js';

export const AppNavigation = {
  name: 'app-navigation',
  data: function () {
    return {
      navTree,
      navCoords: [0, 0],
    };
  },
  computed: {
    isHome() {
      return !(this.navCoords[0] === 0 && this.navCoords[1] !== 0);
    },
  },
  template: `<div style="max-width: 70rem;">
        <div style="color: #eee;">Utiliser les flèches du clavier pour naviguer.</div>
        <UpperNav 
            :navCoords="navCoords" 
            :upperLinks="navTree[0]"
        />
        <ResumeChannel
            v-if="isHome"
            :navCoords="navCoords" 
            :channels="navTree[1]"
        />
        <NowOnTv
            v-if="isHome"
            :navCoords="navCoords" 
            :shows="navTree[2]"
        />
        <div v-if="!isHome">
            <h1 style="color: #eee;">On Page {{navTree[0][navCoords[1]]['label']}}</h1>
        </div>
    </div>`,
  methods: {
    navigate(event) {
      const direction = this.getDirectionFromEvent(event);
      const updatedCoords = [...this.navCoords];
      switch (direction) {
        case 'LEFT': {
          if (this.navCoords[1] === 0) {
            updatedCoords[1] = this.navTree[this.navCoords[0]].length - 1;
          } else {
            updatedCoords[1]--;
          }
          break;
        }
        case 'RIGHT': {
          if (
            this.navCoords[1] ===
            this.navTree[this.navCoords[0]].length - 1
          ) {
            updatedCoords[1] = 0;
          } else {
            updatedCoords[1]++;
          }
          break;
        }
        case 'UP': {
          if (this.navCoords[0] === 0) {
            updatedCoords[0] = this.navTree.length - 1;
          } else {
            updatedCoords[0]--;
          }
          updatedCoords[1] = 0;
          break;
        }
        case 'DOWN': {
          if (this.navCoords[0] === this.navTree.length - 1) {
            updatedCoords[0] = 0;
          } else {
            updatedCoords[0]++;
          }
          updatedCoords[1] = 0;
          break;
        }
        case 'ENTER': {
          if (this.navCoords[0] > 0) {
            alert(
              `Watching ${
                this.navTree[this.navCoords[0]][this.navCoords[1]]['label']
              }!`,
            );
          }
          break;
        }
      }
      this.navCoords = updatedCoords;
    },
    getDirectionFromEvent(event) {
      const code = event.code;
      switch (code) {
        case 'ArrowLeft':
          return 'LEFT';
        case 'ArrowRight':
          return 'RIGHT';
        case 'ArrowUp':
          return 'UP';
        case 'ArrowDown':
          return 'DOWN';
        case 'Enter':
          return 'ENTER';
      }
      // Fallback to keycodes
      const keyCode = event.keyCode;
      switch (keyCode) {
        case LEFT:
          return 'LEFT';
        case RIGHT:
          return 'RIGHT';
        case UP:
          return 'UP';
        case DOWN:
          return 'DOWN';
        case ENTER:
          return 'ENTER';
      }
    },
  },

  components: {
    UpperNav,
    ResumeChannel,
    NowOnTv,
  },
  mounted() {
    document.addEventListener('keydown', this.navigate);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.navigate);
  },
};
