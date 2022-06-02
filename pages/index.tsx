import { useEffect } from "react"
import type { InferGetServerSidePropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  console.log(config.apiUrl)
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetServerSidePropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0,3).map(product => 
          <ProductCard 
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Hero 
        headline="Cookies, ice cream "
        description="
        Description sentence example. He called the station and reported the description of the vehicle. Angry was a good description , she noted. Howie obtained a full description of the man and his vehicle and the license plate number."
      />

      <Marquee gradient={false}>
      { products.slice(0,3).map(product => 
          <ProductCard 
            key={product.id}
            variant="slim"
            product={product}
          />
        )}
      </Marquee>
    </>
  )
}

Home.Layout = Layout
