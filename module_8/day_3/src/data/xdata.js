

import{reactive} from 'vue'

const xdata = reactive({
    massage:'xdata world',
    count:10,
    increase(){
      this.count+=10
    },
    decrease(){
      this.count-=10
    }
  })

  export{xdata}