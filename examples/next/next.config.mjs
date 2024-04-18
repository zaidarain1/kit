import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['@0xsequence/kit', '@0xsequence/kit-wallet', '@0xsequence/kit-connectors', '@0xsequence/checkout']
}

export default withVanillaExtract(nextConfig)
