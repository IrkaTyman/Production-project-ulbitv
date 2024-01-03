import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode} = options;
    
    return {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        plugins:  buildPlugins(options),
      };
}