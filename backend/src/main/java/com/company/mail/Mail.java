package com.company.mail;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class Mail {


    private static final String adresWysylki = "spoldzielniamieszkaniowa3@wp.pl";
    private static final String mailUsername= "spoldzielniamieszkaniowa3";
    private static final String mailPassword = "spoldzielniamieszkaniowa4";
    private static final String AdresLinkuAktywacyjnego = "http://localhost:8080/activate.html?appUserId=";


    public static void Send(String name, String surname, String mail, String query) {
        String tytulWiadomosci = "Pytanie z portalu mieszkaniowego";
        StringBuilder trescWiadomosci = new StringBuilder();
        try {

            Properties props = new Properties();
            props.setProperty("mail.transport.protocol", "smtp");
            props.setProperty("mail.host", "smtp.wp.pl");
            props.setProperty("mail.user", "spoldzielniamieszkaniowa3");
            props.setProperty("mail.password", "spoldzielniamieszkaniowa4");
            props.setProperty("mail.smtp.auth", "true");
            props.setProperty("mail.from", "spoldzielniamieszkaniowa3@wp.pl");

            Session session = Session.getInstance(props, new javax.mail.Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(mailUsername, mailPassword);
                }
            });
            MimeMessage message = new MimeMessage(session);
            message.setSubject(tytulWiadomosci);
            message.setFrom(new InternetAddress(adresWysylki));

            String mailTO = "przemyslaw.buba@gmail.com";
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mailTO));
            trescWiadomosci.append("Dane osoby zgłaszającej, \n")
                    .append("\nImię: " + name)
                    .append("\nNazwisko: " + surname)
                    .append("\nAdres mailowy: " + mail)
                    .append("\nPytanie: " + query);


            message.setText(trescWiadomosci.toString());
            message.setHeader("Message-ID", "my-message-id");
            Transport.send(message);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
