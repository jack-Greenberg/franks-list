from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    DateTimeField,
    BooleanField,
    SelectField,
    TextAreaField,
    FormField
)
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired


class UserForm(FlaskForm):
    name_ = StringField('Name', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired()])


class EventForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    location = StringField('Location', validators=[DataRequired()])
    # allDay = BooleanField('All Day')
    # multiDay = BooleanField('Multi Day')
    dtstart = DateTimeField('Start', validators=[DataRequired()], format="%y/%m/%d %H:%M:%S")
    dtend = DateTimeField('End', validators=[DataRequired()], format="%y/%m/%d %H:%M:%S")
    category = SelectField('Category', validators=[DataRequired()], choices=[
        ("academic_calendar", "Academic Calendar"),
        ("academic_advising", "Academic Advising"),
        ("residential", "Residential"),
        ("health", "Health and Wellness"),
        ("pgp", "PGP"),
        ("hr", "HR"),
        ("diversity", "Diversity and Inclusion"),
        ("international", "Intl' and Study Away"),
        ("admission", "Admission and Financial Aid"),
        ("library", "The Library"),
        ("shop", "The Shop"),
        ("clubs", "Clubs and Organizations"),
        ("other", "Other Events"),
    ])
    description = TextAreaField('Description', validators=[DataRequired()])
    host = FormField(UserForm)
