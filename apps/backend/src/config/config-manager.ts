import { ApplicationPluginConfig, devConfig } from "@uni/databases";
import { deepMerge } from "@uni/utils";




let defaultApplicationPluginConfig: ApplicationPluginConfig = devConfig;

/**
 * Override the default config by merging in the provided values.
 *
 * @param providedConfig - The provided configuration to merge with the default configuration.
 */
export function setConfig(providedConfig: Partial<ApplicationPluginConfig>): void {
	defaultApplicationPluginConfig = deepMerge(defaultApplicationPluginConfig, providedConfig);
}

/**
 * Returns the app bootstrap config object.
 *
 * @returns The readonly default configuration.
 */
export function getConfig(): Readonly<ApplicationPluginConfig> {
	return defaultApplicationPluginConfig;
}

/**
 * Reset the configuration to the default values.
 */
export function resetConfig(): void {
	defaultApplicationPluginConfig = devConfig;
}
