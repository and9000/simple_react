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
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: load')
    ];
  }

}
