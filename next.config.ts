import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cssModules: true,
  module:{ 
    rules:[ 
      {
        test:/\.(png|jpg|woff|svg|eot|ttf|woff2|otf)$/,
        loader:'url-loader?limit=8192&name=images/[name].[ext]'

        }
    ]
  }

};

export default nextConfig;
