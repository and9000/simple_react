<?php

namespace Drupal\simple_react\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ReactController.
 */
class ReactController extends ControllerBase {

  /**
   * Load React Component.
   *
   * @return string
   *   Return Hello string.
   */
  public function load() {
    return [
      '#theme' => 'simple_react',
      '#attached' => [
        'library' => [
          'simple_react/simple_react_app_wrapper',
        ],
      ],
    ];
  }

}
