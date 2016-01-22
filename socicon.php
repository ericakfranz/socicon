<?php
/**
 * Plugin Name: Socicon
 * Plugin URI: https://fatpony.me/plugins/socicon/
 * Description: The lightweight social icon font.
 * Version: 1.3.2
 * Author: Erica Franz
 * Author URI: https://fatpony.me/
 *
 * License: GPL2
 */

 defined( 'ABSPATH' ) or die( 'No jellyfish!' );

// Register socicon
function socicon_scripts() {
    wp_register_style( 'socicon',  plugin_dir_url( __FILE__ ) . 'assets/css/socicon.min.css', '1.3.2', screen );
    wp_enqueue_style( 'socicon' );
}
add_action( 'wp_enqueue_scripts', 'socicon_scripts' );