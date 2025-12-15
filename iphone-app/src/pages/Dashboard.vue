<script setup>
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductHighlights from '@/components/ProductHighlights.vue';
import ExploreLineup from '@/components/ExploreLineup.vue';
import GuidedTourSection from '@/components/GuidedTourSection.vue';
import PurchaseBenefits from '@/components/PurchaseBenefits.vue';
import IPhoneEssentials from '@/components/iPhoneEssentials.vue';
import EcosystemShowcase from '@/components/EcosystemShowcase.vue';
import FooterLinks from '@/components/FooterLinks.vue';
import FooterSection from '@/components/FooterSection.vue';

const router = useRouter()

</script>


<template>

  <Header/>
  <HeroSection/>
  <ProductHighlights/>
  <ExploreLineup/>
  <GuidedTourSection/>
  <PurchaseBenefits/>
  <IPhoneEssentials/>
  <EcosystemShowcase/>
  <FooterLinks/>
  <FooterSection/>
</template>