<template>
    <div>
        Count is {{count}}
        <button v-stat="{type: 'increment_btn', desc: '点击增加5'}" @click="increment">+5</button>
        <button v-stat="{type: 'decrement_btn', desc: '点击减少3'}" @click="decrement">-3</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: mapGetters([
        'count'
    ]),
    methods: mapActions([
        'increment',    //将this.increment()映射成$store.dispatch('increment')
        'decrement'
    ])

    // methods: mapActions({
    //     add: 'increment',    //将this.add()映射成$store.dispatch('increment')
    //     dec: 'decrement'
    // })
}
</script>

