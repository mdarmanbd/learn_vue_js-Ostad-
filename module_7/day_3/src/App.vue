


<script setup>
  import TeamMamber from './components/TeamMamber.vue';

  const person_1 = {
    name:'jone doe',
    designation:'ceo & web developer XmaX',
    avater:'//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    about:'Bonnie drives the technical strategy of the flowbite platform and brand.',
    age:35
  }

</script>

<template>
      <section class="mx-auto container">
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                    <!-- <TeamMamber :name = 'person_1.name' :designation = 'person_1.designation' :avater = 'person_1.avater' :about = 'person_1.about' :age="person_1.age"/> -->
                    <TeamMamber v-bind="person_1"/>
                    <TeamMamber name = 'jan doe polo' designation = 'web developer XmaX' avater = '//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' about = 'Bonnie drives the technical strategy of the flowbite platform and brand.'/>
                    <TeamMamber name = 'jan polo' designation = 'web deiginer maX' avater = '//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' about = 'Bonnie drives the technical strategy of the flowbite platform and brand.'/>
                    <TeamMamber name = 'marnando leo' designation = 'backend developer ' avater = '//flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png' about = 'Bonnie drives the technical strategy of the flowbite platform and brand.'/>
                    

                   

                    

                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>


</style>