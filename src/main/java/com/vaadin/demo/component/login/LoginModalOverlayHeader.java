package com.vaadin.demo.component.login;

import com.vaadin.flow.component.login.LoginOverlay;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;
import com.vaadin.demo.DemoExporter; // hidden-source-line

@Route("login-modal-overlay-header")
public class LoginModalOverlayHeader extends Div {

    public LoginModalOverlayHeader() {
        // tag::snippet[]
        LoginOverlay loginOverlay = new LoginOverlay();
        add(loginOverlay);
        // end::snippet[]
    }

    public static class Exporter extends DemoExporter<LoginModalOverlayHeader> { // hidden-source-line
    } // hidden-source-line
}